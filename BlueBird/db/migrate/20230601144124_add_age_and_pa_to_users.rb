class AddAgeAndPaToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :age, :integer#, null: false
    add_column :users, :political_affiliation, :string

    # remove_column :users, :phone_number, :string
    # remove_column :users, :post, :string

  end

  # def up
  #   remove_column :users, :post
  # end

  # def down
  #   add_column :users, :post, :string
  # end
end
