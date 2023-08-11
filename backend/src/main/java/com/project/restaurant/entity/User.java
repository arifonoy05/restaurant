package com.project.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Table(name = "USERS")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    @Column(name = "ROLE_ID")
    private long roleId;
    @Column(name = "NAME")
    private String name;
    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "CREATED_AT")
    private Timestamp createdAt;
    @Column(name = "UPDATED_AT")
    private Timestamp updatedAt;
    @Column(name = "CREATED_BY")
    private long createdBy;
    @Column(name = "UPDATED_BY")
    private long updatedBy;
}
