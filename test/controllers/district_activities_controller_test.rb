require "test_helper"

class DistrictActivitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @district_activity = district_activities(:one)
  end

  test "should get index" do
    get district_activities_url, as: :json
    assert_response :success
  end

  test "should create district_activity" do
    assert_difference("DistrictActivity.count") do
      post district_activities_url, params: { district_activity: { date: @district_activity.date, description: @district_activity.description, images: @district_activity.images, title: @district_activity.title } }, as: :json
    end

    assert_response :created
  end

  test "should show district_activity" do
    get district_activity_url(@district_activity), as: :json
    assert_response :success
  end

  test "should update district_activity" do
    patch district_activity_url(@district_activity), params: { district_activity: { date: @district_activity.date, description: @district_activity.description, images: @district_activity.images, title: @district_activity.title } }, as: :json
    assert_response :success
  end

  test "should destroy district_activity" do
    assert_difference("DistrictActivity.count", -1) do
      delete district_activity_url(@district_activity), as: :json
    end

    assert_response :no_content
  end
end
