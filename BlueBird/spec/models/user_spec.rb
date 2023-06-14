require 'rails_helper'

RSpec.describe User, type: :model do
#   it 'validates presence of username' do
#     user = User.new(email: 'peter@aa.io', password: 'password')
#     # user.valid?
#     expect(user).to_not be_valid
#   end

#   it 'validates presence of email' do
#     user = User.new(username: 'peter', password: 'password')
#     # user.valid?
#     expect(user).to_not be_valid
#   end

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it 'validates presence of session_token' do 
    # user = User.new(username: 'peter', email: 'peter@email.com', password: 'password')
    user = build(:user)
    user.session_token = ''
    user.valid?
    expect(user).to_not be_valid
  end
  it { should validate_length_of(:password).is_at_least(6) }

  describe 'uniqueness' do
    # before(:each) { User.create(username: 'peter', email: 'peter@email.com', password: 'password') }
    before(:each) { create(:user) }

    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_uniqueness_of(:session_token) }
  end

  it { should have_many(:chirps) }

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      create(:user)
      expect(User.last.password).to_not eq('password')
    end

    it 'encrypts password with BCrypt' do
      expect(BCrypt::Password).to receive(:create).with('abcdef')
      build(:user, password: 'abcdef')
    end
  end
end
