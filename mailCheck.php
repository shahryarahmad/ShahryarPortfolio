<?php
// Function to check if an email address is valid
function isEmailValid($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to check if an email domain has a functioning mail server
function isDomainValid($email) {
    list($username, $domain) = explode('@', $email);
    
    // Get the MX records for the domain
    if (getmxrr($domain, $mxhosts)) {
        // Attempt to establish a connection to the first mail server
        $mxhost = $mxhosts[0];
        $mxport = 465; // Default SMTP port
        echo $mxhosts;
        echo "<br>";
        $timeout = 0; // Connection timeout in seconds
        $socket = @fsockopen($mxhost, $mxport, $errno, $errstr, $timeout);

        if ($socket) {
            fclose($socket);
            return true;
        }
    }

    return false;
}

// List of email addresses to check
$emailList = [
    'example@email.com',
    'invalid.email',
    'another@example.com',
    'nonexistent@example.com',
    'shahryardeveloper@gmail.com',
];

foreach ($emailList as $email) {
    if (isEmailValid($email)) {
        if (isDomainValid($email)) {
            echo "$email is a valid email address with a functioning mail server.<br>";
        } else {
            echo "$email is a valid email address, but the mail server is not responding.<br>";
        }
    } else {
        echo "$email is not a valid email address.<br>";
    }
}
?>
