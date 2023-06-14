FactoryBot.define do
  factory :user do
    username { 'peter' }
    email { 'peter@email.com' }
    password { 'password' }
    
    factory :harry_potter do
      username { 'Harry Potter' }
    end
  end
end
