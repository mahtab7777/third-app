var http= require('http')

http.createServer(function(req, res){
    res.write('A Monk in Cloud')
    res.end()
}).listen(80)