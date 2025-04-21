from livereload import Server, shell

server = Server()
server.watch('*.html')
server.watch('css/*.css')
server.watch('js/*.js')
server.watch('images/*')
server.serve(port=8000)