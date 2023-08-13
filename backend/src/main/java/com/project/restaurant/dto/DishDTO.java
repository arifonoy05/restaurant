package com.project.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DishDTO {
    private Long id;
    private Long categoryId;
    private String name;
    private String description;
    private double price;
    private String imageUrl;
    private boolean isAvailable;
    private int preparationTime;
}
