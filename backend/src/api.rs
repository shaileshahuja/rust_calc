use axum::{
    routing::post,
    http::StatusCode,
    Json, Router,
};
use serde::{Deserialize, Serialize};
use crate::calculator;

#[derive(Deserialize)]
pub struct CalculateRequest {
    expression: String,
}

#[derive(Serialize)]
pub struct CalculateResponse {
    result: String,
}

#[derive(Deserialize)]
struct ReverseRequest {
    expression: String,
}

#[derive(Serialize)]
struct ReverseResponse {
    result: String,
}

pub fn routes() -> Router {
    Router::new()
        .route("/calculate", post(calculate))
        .route("/reverse", post(reverse))
}

async fn calculate(Json(payload): Json<CalculateRequest>) -> (StatusCode, Json<CalculateResponse>) {
    match calculator::eval_expression(&payload.expression) {
        Ok(result) => (StatusCode::OK, Json(CalculateResponse { result: result.to_string() })),
        Err(e) => (StatusCode::BAD_REQUEST, Json(CalculateResponse { result: e })),
    }
}

async fn reverse(Json(payload): Json<ReverseRequest>) -> (StatusCode, Json<ReverseResponse>) {
    (StatusCode::OK, Json(ReverseResponse { result: payload.expression.chars().rev().collect() }))
}