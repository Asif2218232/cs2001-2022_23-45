package com.example.demo.Model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private Integer total;
    @NotEmpty
    private String fullName;
    @Column(length = 16)
    @NotEmpty
    private String cardNumber;
    @NotEmpty
    private String expiryDate;
    @NotNull
    @Column(length = 3)
    private int cvv;

}