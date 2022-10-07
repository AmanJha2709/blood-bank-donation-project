

const http = require('http');
const fs = require('fs');




const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./aboutus.html')
const availability = fs.readFileSync('availability.html')
const contact = fs.readFileSync('index.html')
const login = fs.readFileSync('indexaa.html')
const signin = fs.readFileSync('indexa.html')










const server = http.createServer((req, res) => {
  console.log(require)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(url=='/')  {

    res.end(home);

  }

else if(url=='/about')  {

  res.end(about);

}

else if(url==contact)  {

  res.end('contact')

}

else if(url==login)  {

  res.end('login')

}

else if(url==signin)  {

  res.end('signin')

}





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
