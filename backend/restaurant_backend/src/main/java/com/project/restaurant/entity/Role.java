package com.project.restaurant.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Table(name = "ROLES")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    private String name;
    @Column(name = "CREATED_AT")
    private Timestamp createdAt;
    @Column(name = "UPDATED_AT")
    private Timestamp updatedAt;
    @Column(name = "CREATED_BY")
    private long createdBy;
    @Column(name = "UPDATED_BY")
    private long updatedBy;

}
