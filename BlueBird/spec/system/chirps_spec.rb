require 'rails_helper'

RSpec.describe "Chirps", type: :system do
  before { driven_by(:rack_test) }

  describe "Creating a Chirp" do
    feature 'when logged in' do
      background do
        # visit new_user_path
        # fill_in 'Username:', with: 'toby'
        # fill_in 'Email:', with: 'toby@email.com'
        # fill_in 'Password:', with: 'password'
        # click_button 'Sign Up' 
        register_as_toby
        
        visit new_chirp_path
        fill_in 'Body:', with: 'toby says hi'
        click_button 'Create new Chirp'
      end

      scenario 'correctly inputting values and rendering chirp show page' do
        expect(page).to have_content('toby says hi')
        expect(current_path).to eq(chirp_path(Chirp.last))
      end

    end

    feature 'when logged out' do
      background do
        visit new_chirp_path
      end

      scenario 'redirects user to sign in page' do
        expect(page).to have_content('Sign In Form')
        expect(current_path).to eq(new_session_path)
      end
    end
  end
end