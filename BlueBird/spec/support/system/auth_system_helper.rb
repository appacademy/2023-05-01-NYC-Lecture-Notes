module AuthSystemHelper
  def register_as_toby
    visit new_user_path
    fill_in 'Username:', with: 'toby'
    fill_in 'Email:', with: 'toby@email.com'
    fill_in 'Password:', with: 'password'
    click_button 'Sign Up' 
  end
end