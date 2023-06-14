require 'rails_helper'

RSpec.describe "Chirps", type: :request do
  let(:user) { create(:user) }

  describe "GET #index" do
    it 'renders index properly' do
      user = create(:user)
      Chirp.create(author_id: user.id, body: 'Hello World!')

      get chirps_url
  
      expect(response).to render_template(:index)
      expect(response).to have_http_status(200)
      expect(response.body).to include("Chirp's Index")
      expect(response.body).to include("Hello World!")
    end
  end

  describe "GET #new" do

    it 'renders new form properly' do
      # post session_url, params: { user: { username: user.username, password: user.password }}
      login_user(user)

      get new_chirp_url # get '/chirps/new'

      expect(response).to render_template(:new)
      expect(response).to have_http_status(200)
      expect(response.body).to include("Body:")
      expect(response.body).to include("Create a new chirp")
    end
  end

  describe "POST #create" do
    context 'when signed in' do
      it 'properly creates a new chirp' do
        login_user(user)
        last_chirp = Chirp.last
        post chirps_url, params: { chirp: { body: 'hello' } }
        
        expect(response).to redirect_to(chirp_url(Chirp.last))
        expect(Chirp.last).to_not eq(nil)
      end

      # post session_url, params: { user: { username: user.username, password: user.password }}
      # login_user(user)

    end

    context 'when signed out' do
      it 'redirects to sign in page' do
        post chirps_url, params: { chirp: { body: 'hello' } }

        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
