
@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.price tea.price
        # json.description tea.description
        # json.extract! tea, :id, :flavor, :price, :description
        json.partial! 'tea', tea: tea
    end
end
