require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:cake) { Dessert.new("cake", 3, chef) }
  let(:chef) { double("chef", name: "Bootstrap") }


  describe "#initialize" do
    it "sets a type" do
      expect(cake.type).to eq("cake")
    end

    it "sets a quantity" do
       expect(cake.quantity).to be(3)
    end

    it "starts ingredients as an empty array" do
      expect(cake.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect {Dessert.new("brownie", "lots", chef)}.to raise_error
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      cake.add_ingredient('flour')
      expect(cake.ingredients).to include("flour")
    end

  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["flour", "eggs", "milk", "butter"]

      ingredients.each do |ingredient|
        cake.add_ingredient(ingredient)
      end

      expect(cake.mix!).not_to eq(ingredients)
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      cake.eat(1)
      expect(cake.quantity).to eql(2)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { cake.eat(5) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Bootstrap the Great Baker")
      expect(cake.serve).to eq("Chef Bootstrap the Great Baker has made 3 cakes!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(cake)
      cake.make_more
    end

  end
end
