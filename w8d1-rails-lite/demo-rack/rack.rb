gem 'rack', '~> 2.2.4'
require 'rack'

class SuperBasicApp
    def self.call(env)
        p env
        ['200', {'Content-Type' => 'text/html'}, ['Welcome to our Basic App. Happy Juneteenth!']]
    end
end

class LessBasicApp
    def self.call(env)
        req = Rack::Request.new(env)
        res = Rack::Response.new

        name = req.params['name']

        res.write("Hello #{name}. Happy Juneteenth!")
        res.finish
    end
end

LessBasicApp2 = Proc.new do |env|
        req = Rack::Request.new(env)
        res = Rack::Response.new

        name = req.params['name']

        res.write("Hello #{name}. Happy Juneteenth!")
        res.finish
end


class MyController
    def execute(req, res)
        if req.path == "/cats"
            res.write("Hello cats!")
        elsif req.path == "/dogs"
            res.status = 302
            res.location = "/cats"
        else
            res.write("Hello world!")
        end
    end
end

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new.execute(req, res)
    res.finish
end

Rack::Server.start({
    app: app,
    Port: 3000
})