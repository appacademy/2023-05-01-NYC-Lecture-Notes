module AuthRequestHelper
  def login_user(user)
    post session_url, params: { 
      user: { 
        username: user.username, password: user.password 
      }
    }
  end
end