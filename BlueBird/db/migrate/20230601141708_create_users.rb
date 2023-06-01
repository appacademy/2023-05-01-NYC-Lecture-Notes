class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false

      # other options to add index to column
      # option 1
      # t.index :username, unique: true
      # t.index :email, unique: true
      # option 2
      # t.string :username, null: false, index: { unique: true }
      # t.string :email, null: false, index: { unique: true }

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true

  end
end
