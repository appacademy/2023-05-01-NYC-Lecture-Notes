# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# we want to make sure that every time we seed, it's a 'clean' seed, with no duplicate rows in our DB
# We want to destroy the data in the order it 'belongs to'

Like.destroy_all # belongs to Yips and Users
Chirp.destroy_all # belongs to Users
User.destroy_all # can exist on its own

puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('chirps')
ApplicationRecord.connection.reset_pk_sequence!('likes')

# Users
amin = User.create!(
  username: "awesome_person", 
  email: "awesome_person@email.com", 
  # password: "starwars",
  age: 29, 
  political_affiliation: "JavaScript"
)

peter = User.create!(
  username: "valerous", 
  email: "valerous@email.com", 
  # password: "starwars",
  age: 21, 
  political_affiliation: "Ruby"
)

steve = User.create!(
  username: "dan_the_man", 
  email: "dan_the_man@email.com", 
  # password: "starwars",
  age: 13, 
  political_affiliation: "Ruby"
)

clarence = User.create!(
  username: "the_wizard", 
  email: "the_wizard@email.com", 
  # password: "starwars",
  age: 28, 
  political_affiliation: "CSS"
)

kyle = User.create!(
  username: "catz", 
  email: "catz@email.com", 
  # password: "starwars",
  age: 14, 
  political_affiliation: "Ruby"
)

ayce = User.create!(
  username: "squirelly", 
  email: "squirelly@email.com", 
  # password: "starwars",
  age: 18, 
  political_affiliation: "JavaScript"
)

kin = User.create!(
  username: "talk_to_the_hand", 
  email: "talk_to_the_hand@email.com", 
  # password: "starwars",
  age: 14, 
  political_affiliation: "Ruby"
)

spencer = User.create!(
  username: "spencer_gets_buckets", 
  email: "spencer_gets_buckets@email.com", 
  # password: "starwars",
  age: 12, 
  political_affiliation: "JavaScript"
)

brad = User.create!(
  username: "beep_boop", 
  email: "beep_boop@email.com", 
  # password: "starwars",
  age: 26, 
  political_affiliation: "C++"
)

greta = User.create!(
  username: "adventursaurus", 
  email: "adventursaurus@email.com", 
  # password: "starwars",
  age: 29, 
  political_affiliation: "JavaScript"
)

big_company = User.create!(
  username: "instructors_rock", 
  email: "instructors_rock@email.com", 
  # password: "starwars",
  age: 39, 
  political_affiliation: "Instructors"
)


# chirps
chirp1 = Chirp.create!(author_id: kin.id, body: "Please use my messaging app, it's way better than Twitter.")
chirp2 = Chirp.create!(author_id: big_company.id, body: "Hello fellow instructors.")
chirp3 = Chirp.create!(author_id: big_company.id, body: "Have you seen this sweet instructor merch?")
chirp4 = Chirp.create!(author_id: spencer.id, body: "Sweeeeeet.")
chirp5 = Chirp.create!(author_id: kyle.id, body: "Kahoots are an opportunity to mess with students.")

chirp6 = Chirp.create!(author_id: peter.id, body: "Raaaaaiiiils.")
chirp7 = Chirp.create!(author_id: kyle.id, body: "This is a random quote I found online. -Some person, 2020.")
chirp8 = Chirp.create!(author_id: spencer.id, body: "JavaScript is the best coding language.")

chirp9 = Chirp.create!(author_id: kin.id, body: "Programmer: A machine that turns coffee into code.")
chirp10 = Chirp.create!(author_id: big_company.id, body: "You're a wizard, instructor.")


# Likes

# kyle
Like.create!(liker_id: kyle.id, chirp_id: chirp1.id)
Like.create!(liker_id: kyle.id, chirp_id: chirp4.id)
Like.create!(liker_id: kyle.id, chirp_id: chirp6.id)
Like.create!(liker_id: kyle.id, chirp_id: chirp8.id)
Like.create!(liker_id: kyle.id, chirp_id: chirp9.id)

# kin
Like.create!(liker_id: kin.id, chirp_id: chirp6.id)
Like.create!(liker_id: kin.id, chirp_id: chirp7.id)
Like.create!(liker_id: kin.id, chirp_id: chirp8.id)
Like.create!(liker_id: kin.id, chirp_id: chirp4.id)

# ayce
Like.create!(liker_id: ayce.id, chirp_id: chirp4.id)
Like.create!(liker_id: ayce.id, chirp_id: chirp5.id)
Like.create!(liker_id: ayce.id, chirp_id: chirp8.id)

# spencer
Like.create!(liker_id: spencer.id, chirp_id: chirp5.id)
Like.create!(liker_id: spencer.id, chirp_id: chirp6.id)

# Big Company
Like.create!(liker_id: big_company.id, chirp_id: chirp1.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp4.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp5.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp6.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp7.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp8.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp9.id)