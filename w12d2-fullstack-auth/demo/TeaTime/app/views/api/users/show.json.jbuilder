json.user do
  json.extract! @user, :id, :username, :created_at
end

# {
#   user: {id: 1, username: 'Peter', created_at: timestamp}
# }