#
require 'sinatra'
require "sinatra/json"


configure do
end

get '/' do
  erb :index
end

get '/index' do
  json [
         {division: 'Software', sales: 125000},
         {division: 'Services', sales: 25000},
         {division: 'Hardware', sales: 8675309}
       ]
end
