// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'us-east-2:9c090702-b930-4866-bb0e-fb4e7eae6a98';
var aws_cognito_region = 'us-east-2';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'sportv-hosting-mobilehub-2077538127';
var aws_content_delivery_bucket_region = 'us-east-2';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd15hp6peggd9vh.cloudfront.net';
var aws_mobile_analytics_app_id = '86adcd4d769d4af79645b954f6ce726c';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = '9a75b7e9-462a-4015-a975-e4884103cdb9';
var aws_project_name = 'SportV';
var aws_project_region = 'us-east-2';
var aws_resource_name_prefix = 'sportv-mobilehub-2077538127';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});