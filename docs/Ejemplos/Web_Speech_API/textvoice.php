

   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<meta charset="UTF-8">
   	<meta name="viewport" content="width=device-width, initial-scale=1.0">
   	<title>Document</title>
   </head>
   <body>
   	<?php
if (isset($_POST['txt'])) {
   $txt    = $_POST['txt'];
   $txt    = htmlspecialchars($txt);
   $txt    = rawurlencode($txt);
   $html   = file_get_contents('https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&q=' . $txt . '&tl=en-IN');
   $player = "<audio controls='controls' autoplay><source src='data:audio/mpeg;base64," . base64_encode($html) . "'></audio>";
   echo $player;
   ?>
   	<form method="post"><input id="txt" name="txt" type="textbox" />
<input name="submit" type="button" value="Convert to speech" /></form>
   </body>
   </html>
