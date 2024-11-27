require "test_helper"

class DistrictEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @district_event = district_events(:one)
  end

  test "should get index" do
    get district_events_url, as: :json
    assert_response :success
  end

  test "should create district_event" do
    assert_difference("DistrictEvent.count") do
      post district_events_url, params: { district_event: { date: @district_event.date, description: @district_event.description, image_url: @district_event.image_url, title: @district_event.title } }, as: :json
    end

    assert_response :created
  end

  test "should show district_event" do
    get district_event_url(@district_event), as: :json
    assert_response :success
  end

  test "should update district_event" do
    patch district_event_url(@district_event), params: { district_event: { date: @district_event.date, description: @district_event.description, image_url: @district_event.image_url, title: @district_event.title } }, as: :json
    assert_response :success
  end

  test "should destroy district_event" do
    assert_difference("DistrictEvent.count", -1) do
      delete district_event_url(@district_event), as: :json
    end

    assert_response :no_content
  end
end
