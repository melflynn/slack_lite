# == Schema Information
#
# Table name: api_room_users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  room_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_api_room_users_on_room_id  (room_id)
#  index_api_room_users_on_user_id  (user_id)
#
require 'test_helper'

class Api::RoomUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
