package com.project.restaurant.dto;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodCategoryDTO {
    @Nullable
    private long id;
    private String description;
    private String name;
}
