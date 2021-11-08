module.exports=(name,link)=>{
return `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>

    </style>
  </head>
  <body>
  Hi , ${name} the invoice Download link is given below. Please click to download the invoice file
  <br><br>
  <center><a href="${link}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Download Invoice</a></center>
<hr>
  </body>
</html>`
}
