
require 'spec_helper'
require 'json'

describe "CRUD Controller App" do

  it "should respond to GET" do
    get '/'
    expect(last_response).to be_ok
  end

  it "should fetch JSON" do
    get '/index'
    expect(JSON.parse(last_response.body)).to eq({})
  end

end
