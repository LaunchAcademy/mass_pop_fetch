require 'sinatra'
require 'sinatra/reloader'
require 'csv'

configure :development, :test do
  require 'pry'
end

{
  "Acton" => {
    1980 => 3412314,
    1990 => 21442341,
    2000 => 23414414,
    2010 => 44323414
  }
}

Dir[File.join(File.dirname(__FILE__), 'lib', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/' do
  data = population_data
  @towns = data.map{|t| t.name }
  if params[:sort] == "desc"
    @towns.reverse!
  end
  erb :index
end

get '/towns/:town_name' do
  @town_name = params[:town_name]
  @town = population_data.find{|t| t.name == params[:town_name] }
  if @town
    erb :town
  else
    status 404
  end
end

def population_data
  Town.from_csv(File.join(File.dirname(__FILE__), '/mass_pop.csv'))
end
