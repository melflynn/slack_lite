# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
class Room < ApplicationRecord
  validates :name, presence: true

  has_many :messages

  belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User
  
end
