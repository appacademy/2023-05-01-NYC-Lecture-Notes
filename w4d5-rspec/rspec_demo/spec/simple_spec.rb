require 'simple'

describe "#say_hello" do
  it "properly says 'Hello World!'" do
    expect(say_hello).to eq("Hello World!")
  end
end

describe "#color_symbol" do
  it "properly outputs symbol represented color" do
    expect(color_symbol(:white)).to be(:white)
    expect(color_symbol(:white)).to be_instance_of(Symbol)
  end

  it "raises error 'Must be symbol" do
    expect { color_symbol("white") }.to raise_error("Must be symbol")
  end
end