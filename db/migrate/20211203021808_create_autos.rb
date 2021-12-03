class CreateAutos < ActiveRecord::Migration[6.1]
  def change
    create_table :autos do |t|
      t.string :patente
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
