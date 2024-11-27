require "test_helper"

class DistrictPublicationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @district_publication = district_publications(:one)
  end

  test "should get index" do
    get district_publications_url, as: :json
    assert_response :success
  end

  test "should create district_publication" do
    assert_difference("DistrictPublication.count") do
      post district_publications_url, params: { district_publication: { description: @district_publication.description, link: @district_publication.link, title: @district_publication.title } }, as: :json
    end

    assert_response :created
  end

  test "should show district_publication" do
    get district_publication_url(@district_publication), as: :json
    assert_response :success
  end

  test "should update district_publication" do
    patch district_publication_url(@district_publication), params: { district_publication: { description: @district_publication.description, link: @district_publication.link, title: @district_publication.title } }, as: :json
    assert_response :success
  end

  test "should destroy district_publication" do
    assert_difference("DistrictPublication.count", -1) do
      delete district_publication_url(@district_publication), as: :json
    end

    assert_response :no_content
  end
end
