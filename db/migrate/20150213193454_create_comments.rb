class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :upvotes
      t.references :post, index: true

      t.timestamps
    end
  end
end
