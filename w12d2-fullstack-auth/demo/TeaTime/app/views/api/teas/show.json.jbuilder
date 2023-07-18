
json.tea do
        # json.extract! @tea, :id, :flavor, :price, :description
    json.partial! 'api/teas/tea', tea: @tea
    json.liker_ids @tea.liker_ids
    json.transaction_ids @tea.transaction_ids
end

likers = @tea.likers

json.users do
    likers.each do |liker|
        json.set! liker.id do
            json.extract! liker, :id, :username
        end
    end
end

# intended state shape:
#
# {
#   teas: 
#     1: {
#         id: 1,
#         flavor: "green",
#         price: 3.0,
#         description: "its good",
#         likerIds: [1,2,4,5]
#         transactionIds: [2,3,6,7]
#     },
#   users: {
#     1: {
#       id: 1,
#       username: "mike"
#     },
#     3: {
#       ...
#     },
#     6: {
#       ...
#     },
#     7: {
#       ...
#     }
#   }
# }