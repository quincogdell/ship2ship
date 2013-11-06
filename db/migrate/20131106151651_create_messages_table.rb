class CreateMessagesTable < ActiveRecord::Migration
  def up
    create_table :messages do |t|
      t.string :title
      t.string :body
      t.boolean :is_read, :default => false
      t.timestamps
    end
  end

  def down
    drop_table :messages
  end
end
