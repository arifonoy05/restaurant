package com.project.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Table(name = "FOOD_CATEGORY")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    private String name;
    private String description;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private long createdBy;
    private long updatedBy;
}
