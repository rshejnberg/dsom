require 'test_helper'

class PublicControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get whatdo" do
    get :whatdo
    assert_response :success
  end

  test "should get aboutme" do
    get :aboutme
    assert_response :success
  end

  test "should get projects" do
    get :projects
    assert_response :success
  end

end
