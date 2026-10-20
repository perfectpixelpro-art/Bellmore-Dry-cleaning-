<?php
// Enquiry form handler for cPanel hosting.
//
// Sends from the noreply@ mailbox that exists on this account, so the mail
// leaves the same server the domain's SPF record authorises. The customer's
// own address goes in Reply-To, which is what you hit "Reply" against.

declare(strict_types=1);

const RECIPIENTS = [
    'info@bellmoredrycleaner.com',
    'chirag@thesocial99.com',
];
const SENDER   = 'noreply@bellmoredrycleaner.com';
const SITE     = 'Bellmore Dry Cleaner';
const MAX_LEN  = 5000;

header('Content-Type: application/json; charset=utf-8');

function fail(int $status, string $message)
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'Method not allowed.');
}

// The form posts JSON; fall back to a normal form encoding just in case.
$raw   = file_get_contents('php://input') ?: '';
$input = json_decode($raw, true);
if (!is_array($input)) {
    $input = $_POST;
}

// Bots fill in every field they find, including ones humans never see.
$honeypot = $input['company'] ?? '';
if (is_scalar($honeypot) && trim((string)$honeypot) !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

/** Trims, caps length, and strips the CR/LF that header injection relies on. */
function clean(array $input, string $key): string
{
    $value = $input[$key] ?? '';
    $value = is_scalar($value) ? (string)$value : '';
    $value = str_replace(["\r", "\n"], ' ', $value);
    return mb_substr(trim($value), 0, MAX_LEN);
}

$name    = clean($input, 'name');
$phone   = clean($input, 'phone');
$email   = clean($input, 'email');
$service = clean($input, 'service');
$date    = clean($input, 'date');

// The message is the one field where line breaks are wanted.
$rawMessage = $input['message'] ?? '';
$message = is_scalar($rawMessage) ? mb_substr(trim((string)$rawMessage), 0, MAX_LEN) : '';

if ($name === '' || $phone === '' || $email === '') {
    fail(422, 'Please fill in your name, phone number and email address.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'That email address does not look right.');
}

$fields = [
    'Name'                  => $name,
    'Phone'                 => $phone,
    'Email'                 => $email,
    'Service required'      => $service !== '' ? $service : '-',
    'Preferred drop-off'    => $date !== '' ? $date : '-',
];

$body = "New enquiry from the " . SITE . " website\n\n";
foreach ($fields as $label => $value) {
    $body .= str_pad($label . ':', 22) . $value . "\n";
}
$body .= "\nMessage:\n" . ($message !== '' ? $message : '-') . "\n";
$body .= "\n--\nSent " . date('j M Y, g:ia T') . " from " . ($_SERVER['HTTP_HOST'] ?? 'the website') . "\n";

$headers = implode("\r\n", [
    'From: ' . SITE . ' <' . SENDER . '>',
    'Reply-To: "' . str_replace(['"', '<', '>'], '', $name) . '" <' . $email . '>',
    'Content-Type: text/plain; charset=utf-8',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = mail(
    implode(', ', RECIPIENTS),
    'New enquiry from ' . $name,
    $body,
    $headers,
    '-f' . SENDER
);

if (!$sent) {
    error_log('send-enquiry.php: mail() returned false');
    fail(500, 'We could not send that just now. Please call (516) 656-1221.');
}

echo json_encode(['ok' => true]);
