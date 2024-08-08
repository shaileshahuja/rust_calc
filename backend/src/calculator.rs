use std::f64;

pub fn eval_expression(expression: &str) -> Result<f64, String> {
    let tokens: Vec<&str> = expression.split_whitespace().collect();
    let mut stack: Vec<f64> = Vec::new();

    for token in tokens {
        match token {
            "+" | "-" | "*" | "/" => {
                if stack.len() < 2 {
                    return Err("Invalid expression: not enough operands".to_string());
                }
                let b = stack.pop().unwrap();
                let a = stack.pop().unwrap();
                let result = match token {
                    "+" => a + b,
                    "-" => a - b,
                    "*" => a * b,
                    "/" => {
                        if b == 0.0 {
                            return Err("Division by zero".to_string());
                        }
                        a / b
                    },
                    _ => unreachable!(),
                };
                stack.push(result);
            },
            _ => {
                match token.parse::<f64>() {
                    Ok(num) => stack.push(num),
                    Err(_) => return Err(format!("Invalid token: {}", token)),
                }
            },
        }
    }

    if stack.len() != 1 {
        Err("Invalid expression: too many operands".to_string())
    } else {
        Ok(stack[0])
    }
}