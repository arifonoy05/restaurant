package com.project.restaurant.dto;

import lombok.Data;
import org.springframework.lang.Nullable;

@Data
public class RestaurantDTO {
    @Nullable
    private long id;
    private String name;
    private String foundingYear;
    private String email;
    private String websiteUrl;
    private String phone;
    private String openingHours;
    private int capacity;
    private boolean isOpen;
    private float rating;
    private String address;
    private String city;
}
