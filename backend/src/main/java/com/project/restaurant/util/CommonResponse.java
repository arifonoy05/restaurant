package com.project.restaurant.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CommonResponse {
    private int code = 500;
    private String message = "Error occurred!";
}
