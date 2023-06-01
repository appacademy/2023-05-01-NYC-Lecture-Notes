class CreateChirps < ActiveRecord::Migration[7.0]
  def change
    create_table :chirps do |t|
      t.string :body, null: false
      # t.integer :author_id, null: false
      t.references :author, foreign_key: { to_table: :users }, index: true, null: false

      t.timestamps
    end

    # add_foreign_key :chirps, :users, column: :author_id
    # add_index :chirps, :author_id
  end
end
