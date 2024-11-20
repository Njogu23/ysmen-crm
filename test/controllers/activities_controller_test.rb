require "test_helper"

class ActivitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @activity = activities(:one)
  end

  test "should get index" do
    get activities_url, as: :json
    assert_response :success
  end

  test "should create activity" do
    assert_difference("Activity.count") do
      post activities_url, params: { activity: { club_id: @activity.club_id, date: @activity.date, description: @activity.description, district_id: @activity.district_id, images: @activity.images, title: @activity.title } }, as: :json
    end

    assert_response :created
  end

  test "should show activity" do
    get activity_url(@activity), as: :json
    assert_response :success
  end

  test "should update activity" do
    patch activity_url(@activity), params: { activity: { club_id: @activity.club_id, date: @activity.date, description: @activity.description, district_id: @activity.district_id, images: @activity.images, title: @activity.title } }, as: :json
    assert_response :success
  end

  test "should destroy activity" do
    assert_difference("Activity.count", -1) do
      delete activity_url(@activity), as: :json
    end

    assert_response :no_content
  end
end
