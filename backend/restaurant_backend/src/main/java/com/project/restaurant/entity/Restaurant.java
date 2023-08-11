package com.project.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Table(name = "RESTAURANTS")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "FOUNDING_YEAR")
    private String foundingYear;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "WEBSITE_URL")
    private String websiteUrl;
    @Column(name = "PHONE")
    private String phone;
    @Column(name = "OPENING_HOURS")
    private String openingHours;
    @Column(name = "CAPACITY")
    private int capacity;
    @Column(name = "IS_OPEN")
    private boolean isOpen;
    @Column(name = "RATING")
    private float rating;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "CITY")
    private String city;
    @Column(name = "POSTAL_CODE")
    private String postalCode;
    @Column(name = "CREATED_AT")
    private Timestamp createdAt;
    @Column(name = "UPDATED_AT")
    private Timestamp updatedAt;
    @Column(name = "CREATED_BY")
    private long createdBy;
    @Column(name = "UPDATED_BY")
    private long updatedBy;
}
