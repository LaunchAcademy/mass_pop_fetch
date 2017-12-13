class Town
  attr_reader :name
  attr_reader :population_data

  def initialize(name, population_data)
    @name = name
    @population_data = population_data
  end

  def self.from_csv(csv_file)
    city_data = []
    CSV.foreach(csv_file, headers: true) do |row|
      city_data << new(row["Town"], {
          1980 => row["1980"].gsub(",", "").to_i,
          1990 => row["1990"].gsub(",", "").to_i,
          2000 => row["2000"].gsub(",", "").to_i,
          2010 => row["2010"].gsub(",", "").to_i
      })
    end
    city_data
  end

  def to_json
    {
      name: @name,
      population_data: @population_data
    }
  end
end