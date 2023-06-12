# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  email                 :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  age                   :integer
#  political_affiliation :string
#  password_digest       :string           not null
#  session_token         :string           not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp,
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like,
    dependent: :destroy
  
  has_many :liked_chirps,
    through: :likes,
    source: :chirp

  
  # # DEMO 1: Finder methods

  # #Get first user record, use first
  # User.first

  # #Get last user record, use last
  # User.last

  # #Find a user that exists by id, use find
  # User.find(10)

  # #Find a user that doesn't exist by id, use find
  # User.find(100)

  # #Find a user by username, use find_by ("awesome_person")
  # User.find_by(username: "awesome_person")
  # User.find_by("username = 'awesome_person'")
  # User.find_by("username = (?)", "awesome_person")
  # User.find_by("username = :username", username: "awesome_person")
  
  # #Find a user by username that does not exist, use find_by
  # User.find_by(username: 'banana')



  # # DEMO 2: Interactive, Queries with Conditions

  # #Find all users between the ages of 10 and 20 inclusive. Show their username, and political affiliation.
  # # User.where("age BETWEEN 10 AND 20")
  # User.select(:political_affiliation, :username).where(age: 10..20)

  # #Find all users not younger than the age of 11. Use `where.not`
  # User.where.not("age < 11")

  # #Find all political_affiliations of our users
  # User.select(:political_affiliation).group(:political_affiliation)
  # User.select(:political_affiliation).distinct

  # #Find all users who has a political affiliation in this list and order by username in ascending order
  # political_affiliations = ["Ruby", "C++"]
  # User.where(political_affiliation: political_affiliations).order(:username)

  # def self.find_by_age(age)
  #   User.where(age: age)
  # end

end
