import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.services';
import { UserService } from '../../core/services/user.services';
import { Router } from '@angular/router';

// Clean decoupled custom modular component imports
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { ManageUsersComponent } from '../admin/manage-users/manage-users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, LoaderComponent, ManageUsersComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // ⬇️ THESE REQUIRED PROPERTY DECLARATIONS MUST BE PRESENT HERE ⬇️
  currentUser: any;
  userRecords: any[] = [];
  allUsersList: any[] = [];
  
  recordsLoading = false;
  adminLoading = false;
  apiDelaySetting = 2000;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
    if (!this.currentUser) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.recordsLoading = true;
    
    this.userService.getUserRecords(this.currentUser.userId, this.apiDelaySetting).subscribe({
      next: (data) => {
        this.userRecords = data;
        this.recordsLoading = false;
      },
      error: () => this.recordsLoading = false
    });

    if (this.currentUser.role === 'Admin') {
      this.adminLoading = true;
      this.userService.getSystemUsers(this.apiDelaySetting).subscribe({
        next: (data) => {
          this.allUsersList = data;
          this.adminLoading = false;
        },
        error: () => this.adminLoading = false
      });
    }
  }

  triggerControlledReload(): void {
    this.loadDashboardData();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
