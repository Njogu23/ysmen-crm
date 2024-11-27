require "test_helper"

class DistrictHomePageDetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @district_home_page_detail = district_home_page_details(:one)
  end

  test "should get index" do
    get district_home_page_details_url, as: :json
    assert_response :success
  end

  test "should create district_home_page_detail" do
    assert_difference("DistrictHomePageDetail.count") do
      post district_home_page_details_url, params: { district_home_page_detail: { history: @district_home_page_detail.history, mission: @district_home_page_detail.mission, motto: @district_home_page_detail.motto, vision: @district_home_page_detail.vision } }, as: :json
    end

    assert_response :created
  end

  test "should show district_home_page_detail" do
    get district_home_page_detail_url(@district_home_page_detail), as: :json
    assert_response :success
  end

  test "should update district_home_page_detail" do
    patch district_home_page_detail_url(@district_home_page_detail), params: { district_home_page_detail: { history: @district_home_page_detail.history, mission: @district_home_page_detail.mission, motto: @district_home_page_detail.motto, vision: @district_home_page_detail.vision } }, as: :json
    assert_response :success
  end

  test "should destroy district_home_page_detail" do
    assert_difference("DistrictHomePageDetail.count", -1) do
      delete district_home_page_detail_url(@district_home_page_detail), as: :json
    end

    assert_response :no_content
  end
end
